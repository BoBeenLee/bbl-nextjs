export function truncate(width: number) {
  return `
        width: ${width}px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `;
}
