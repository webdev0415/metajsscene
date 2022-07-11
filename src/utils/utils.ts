export function setUVs(rows: number, cols: number, offset: number, verticalStretch: number) {
    return [
      // North side of unrortated plane
      0 + offset, //lower-left corner
      verticalStretch,
  
      cols + offset, //lower-right corner
      verticalStretch,
  
      cols + offset, //upper-right corner
      rows - verticalStretch,
  
      0 + offset, //upper left-corner
      rows - verticalStretch,
  
      // South side of unrortated plane
      cols + offset, // lower-right corner
      verticalStretch,
  
      0 + offset, // lower-left corner
      verticalStretch,
  
      0 + offset, // upper-left corner
      rows - verticalStretch,
  
      cols + offset, // upper-right corner
      rows - verticalStretch,
    ]
}

export function setUVsWide(rows: number, cols: number, offset: number, verticalStretch: number, horizontalStretch: number=0) {
  return [
    // North side of unrortated plane
    0 + offset - horizontalStretch, //lower-left corner
    verticalStretch,

    cols + offset + horizontalStretch, //lower-right corner
    verticalStretch,

    cols + offset + horizontalStretch, //upper-right corner
    rows - verticalStretch,

    0 + offset - horizontalStretch, //upper left-corner
    rows - verticalStretch,

    // South side of unrortated plane
    cols + offset + horizontalStretch, // lower-right corner
    verticalStretch,

    0 + offset - horizontalStretch, // lower-left corner
    verticalStretch,

    0 + offset - horizontalStretch, // upper-left corner
    rows - verticalStretch,

    cols + offset + horizontalStretch, // upper-right corner
    rows - verticalStretch,
  ]
}

export function setUVMirror (rows: number, cols: number, offset: number, verticalStretch: number): number[] {
  return [
    // North side of unrortated plane
    0 + offset, //lower-left corner
    verticalStretch,

    cols + offset, //lower-right corner
    verticalStretch,

    cols + offset, //upper-right corner
    rows - verticalStretch,

    0 + offset, //upper left-corner
    rows - verticalStretch,

    // South side of unrortated plane
    0 + offset, // lower-right corner
    verticalStretch,

    cols + offset, // lower-left corner
    verticalStretch,

    cols + offset, // upper-left corner
    rows - verticalStretch,

    0 + offset, // upper-right corner
    rows - verticalStretch
  ]
}