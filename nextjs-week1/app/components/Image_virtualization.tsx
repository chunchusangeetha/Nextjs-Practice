"use client";

import Image from "next/image";
import usefetch from "../hooks/usefetch";
import { useState } from "react";

export default function ImageVirtualization() {
  const [scrollTop, setScrollTop] = useState(0);

  const { data = [], isLoading, error } = usefetch(
    "https://picsum.photos/v2/list?page=1&limit=100"
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading images</p>;

  const columns = 3;
  const rowHeight = 250;
  const containerHeight = 500;

  const totalRows = Math.ceil(data.length / columns);

  const visibleRowCount = Math.ceil(containerHeight / rowHeight);
  const buffer = 2;

  const startRow = Math.floor(scrollTop / rowHeight);
  const endRow = startRow + visibleRowCount + buffer;

  const visibleRows = [];

  for (let row = startRow; row < endRow && row < totalRows; row++) {
    const start = row * columns;
    const end = start + columns;

    visibleRows.push({
      row,
      items: data.slice(start, end),
    });
  }

  const offsetY = startRow * rowHeight;

  return (
    <main>
      <h1>Example of Grid Virtualization</h1>

      <div
        style={{
          height: containerHeight,
          overflow: "auto",
          border: "1px solid gray",
        }}
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      >
        <div
          style={{
            height: totalRows * rowHeight,
            position: "relative",
          }}
        >
          <div
            style={{
              transform: `translateY(${offsetY}px)`,
              position: "absolute",
              width: "100%",
            }}
          >
            {visibleRows.map((rowData) => (
              <div
                key={rowData.row}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                  height: rowHeight,
                }}
              >
                {rowData.items.map((item: any) => (
                  <div key={item.id}>
                    <Image
                      src={`https://picsum.photos/id/${item.id}/200/200`}
                      alt={item.author}
                      width={200}
                      height={200}
                    />
                    <p>{item.author}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}