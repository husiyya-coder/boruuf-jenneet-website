export default function Home() {
  return (
    <main
      style={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "Arial",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "darkblue",
          fontSize: "50px",
        }}
      >
        Welcome to Boruuf Jenneet Website
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginTop: "20px",
        }}
      >
        This is my first Next.js website deployed on Vercel.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Contact Us
      </button>
    </main>
  );
}