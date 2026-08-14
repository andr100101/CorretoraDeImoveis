
export default function Footer() {
  return (
    <footer
      className="w-full px-6 py-8 mt-60"
      style={{ backgroundColor: "rgba(111, 121, 190, 0.32)" }}
    >
        <div className="space-y-2">
          <p className="text-base md:text-lg">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/5542988912782"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              (42) 98891-2782
            </a>
          </p>

          <p className="text-base md:text-lg">
            <strong>CRECI:</strong> 28408
          </p>
        </div>

        <div className="w-full max-w-md border-t border-gray-400/40 my-6" />

        <a
          href="https://andr100101.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm md:text-base text-gray-700 hover:text-black transition-colors"
        >
          André Luiz Reis - 2026
        </a>
    </footer>
  );
}