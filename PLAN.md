# Plan: Enhanced Timeline Component with Dual-Side & Parallel Item Support

## Summary

Extend the Mantine `Timeline` component to support a new **center-aligned mode** where rich component items can be placed on **both sides** of the timeline, with support for **parallel items** (multiple items at the same vertical position) and **compact spacing**.

## Current State

The existing Timeline component supports:
- `align="left"` or `align="right"` — content on ONE side only
- Vertical items stacked with `spacing-xl` between them
- Custom bullets, but content is always a single column beside the line
- No concept of parallel/simultaneous items

## Requirements Recap

1. **Full component items** — Use rich React components (not just text) as timeline content
2. **Dual-side layout** — Items on both left AND right of the center line
3. **Compact spacing** — Minimize vertical space between items
4. **Parallel items** — Multiple items at the same timeline position (2-3 items side by side)

## Implementation Plan

### Step 1: Add `align="center"` mode to Timeline

**File: `packages/@mantine/core/src/components/Timeline/Timeline.tsx`**

- Add `'center'` to the `align` prop type: `align?: 'right' | 'left' | 'center'`
- When `align="center"`, the timeline line renders in the center, with items flowing to left/right

### Step 2: Add `side` prop to `Timeline.Item`

**File: `packages/@mantine/core/src/components/Timeline/TimelineItem/TimelineItem.tsx`**

- Add a new prop `side?: 'left' | 'right'` to `TimelineItemProps`
- This prop only applies when the parent Timeline has `align="center"`
- Controls which side of the center line this item's content appears on
- Default: `'right'` (content on the right of the timeline)

### Step 3: Create `Timeline.Group` compound component for parallel items

**New file: `packages/@mantine/core/src/components/Timeline/TimelineGroup/TimelineGroup.tsx`**

This is a new sub-component that wraps multiple `Timeline.Item` components that should render **at the same vertical position** (parallel/simultaneous events).

```tsx
<Timeline align="center">
  {/* Single item */}
  <Timeline.Item side="left">
    <MyComponent />
  </Timeline.Item>

  {/* Parallel items — displayed at the same timeline position */}
  <Timeline.Group>
    <Timeline.Item side="left">
      <MyComponent />
    </Timeline.Item>
    <Timeline.Item side="right">
      <MyComponent />
    </Timeline.Item>
  </Timeline.Group>

  {/* Multiple parallel on one side */}
  <Timeline.Group>
    <Timeline.Item side="right">
      <ComponentA />
    </Timeline.Item>
    <Timeline.Item side="right">
      <ComponentB />
    </Timeline.Item>
  </Timeline.Group>
</Timeline>
```

**Implementation details:**
- `Timeline.Group` renders its children in a CSS grid/flex row
- The bullet/connector line still shows a single point for the group
- Items within a group are laid out horizontally (or stacked if on the same side)

### Step 4: CSS changes for center alignment and compactness

**File: `packages/@mantine/core/src/components/Timeline/Timeline.module.css`**

Add new styles:

1. **Center-aligned root**:
   - The root gets `display: flex; flex-direction: column; align-items: center`
   - `padding-inline-start: 0` (line is centered, not offset)

2. **Center-aligned item layout**:
   - Use CSS grid with 3 columns: `[left-content] [bullet-line] [right-content]`
   - Each `item` in center mode becomes a grid with `grid-template-columns: 1fr auto 1fr`
   - Left-side content is right-aligned, right-side content is left-aligned

3. **Compact spacing**:
   - Add a `compact` prop to Timeline that reduces `margin-top` between items from `spacing-xl` to `spacing-xs` or removes it
   - CSS var `--tl-spacing` to control inter-item spacing

4. **Timeline.Group styles**:
   - The group renders as a single timeline row
   - Items within a group on the same side stack vertically (flex column)
   - Items on different sides sit across the center line

### Step 5: Update Timeline to handle Group children

**File: `packages/@mantine/core/src/components/Timeline/Timeline.tsx`**

- Detect `Timeline.Group` vs `Timeline.Item` children
- Pass `__align`, `__active`, `__lineActive` props to groups as well
- Groups forward these props to their child items
- Active index counting: a Group counts as a single index position

### Step 6: Add `compact` prop to Timeline

**File: `packages/@mantine/core/src/components/Timeline/Timeline.tsx`**

- New prop: `compact?: boolean` (default: `false`)
- When `true`, reduces vertical spacing between items
- New CSS variable: `--tl-spacing` used in `.item:not(:first-of-type) { margin-top: ... }`

### Step 7: Create a demo/story for the new features

**File: `packages/@docs/demos/src/demos/core/Timeline/Timeline.demo.center.tsx`**

- Create a demo showcasing center-aligned timeline with:
  - Rich component cards on both sides
  - Parallel items using `Timeline.Group`
  - Compact mode enabled
  - A simplified version of the user's "Detect Language" card as the test component

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `Timeline.tsx` | Modify | Add `center` align, `compact` prop, handle Group children |
| `TimelineItem.tsx` | Modify | Add `side` prop, center-mode grid layout |
| `Timeline.module.css` | Modify | Center alignment styles, compact spacing, grid layout |
| `TimelineGroup/TimelineGroup.tsx` | Create | New compound component for parallel items |
| `Timeline.context.ts` | Modify | Add `align` to context if needed for Group |
| `index.ts` | Modify | Export new TimelineGroup |
| `Timeline.demo.center.tsx` | Create | Demo showcasing new features |

## Key Design Decisions

1. **CSS Grid for center mode** — Each timeline row (item or group) uses a 3-column grid: `1fr auto 1fr`. The bullet sits in the center column. This gives clean alignment without absolute positioning hacks.

2. **Timeline.Group as a compound component** — Rather than a complex data structure, groups are expressed declaratively in JSX. This follows Mantine's existing compound component patterns.

3. **`side` prop on Item** — Simple, explicit control over which side content appears. No magic auto-alternating (user controls placement).

4. **Backward compatible** — All existing `align="left"` and `align="right"` behavior is unchanged. The `side` prop is ignored when not in center mode.
