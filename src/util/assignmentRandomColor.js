// const COLORS = ['#5AB1BB', '#A5C882', '#F7DD72']

export default function assignmentRandomColor(index, colors) {
  const indexColor = index % colors.length;
  return colors[indexColor];
}
