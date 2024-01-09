import "../styles/globals.css";
import CustomCursor from "./components/CustomCursor";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <CustomCursor />
      {Array.from({ length: 1000 }).map((_, idx) => (
        <div
          key={idx}
          className="star absolute" // Make sure to have absolute positioning in your CSS for 'star'
          style={{
            top: `${Math.random() * 100}%`, // Use percentage for full height coverage
            left: `${Math.random() * 100}%`, // Use percentage for full width coverage
            animationDuration: `${0.5 + Math.random() * 2}s`, // random shine duration
            animationDelay: `${Math.random() * 1.5}s`, // random shine delay
          }}
        />
      ))}
      <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
