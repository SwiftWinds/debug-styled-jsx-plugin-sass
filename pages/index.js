const thickness = 4;

export default function Home() {
  return <div> Hello, world! I am the home page.
    <style jsx>{`
      div {
        border: ${thickness}px solid orangered;
        font-size: ${thickness * 8}px;
      }
    `}
    </style>
  </div>;
}
