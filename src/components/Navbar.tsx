import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const openMenu = () => {
    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        menuRef.current?.focus();
      }, 0);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      setTimeout(() => {
        lastFocusedElementRef.current?.focus();
      }, 0);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="relative z-20 flex min-h-[68px] w-full border-b border-slate-300 bg-white px-4 py-2 md:px-8"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">

        <Link
          to="/"
          className="inline-block min-w-9 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="sr-only">Marli Petterhans</span>

          <img
            src={Logo}
            alt="Marli Petterhans Imobiliaria"
            className="h-11 md:h-18 w-auto"
          />
        </Link>

        <div
          id="collapseMenu"
          ref={menuRef}
          tabIndex={-1}
          className={`
            ${isMenuOpen ? "block" : "hidden"}
            fixed right-0 top-0 z-50 h-full w-full overflow-auto
            border-l border-slate-300 bg-white 
            outline-none
            max-lg:w-1/2
            lg:static lg:block lg:h-auto lg:w-auto
            lg:overflow-visible lg:border-0 lg:bg-transparent lg:shadow-none
          `}
        >
          <div className="sticky top-0 flex min-h-[68px] items-center justify-between border-b border-slate-300 bg-white px-4 py-2 lg:hidden">

            <Link
              to="/"
              onClick={closeMenu}
              className="inline-block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="sr-only">Marli Petterhans</span>

              <img
                src={Logo}
                alt="Marli Petterhans Imobiliaria"
                className="h-9 w-auto"
              />
            </Link>

            <button
              type="button"
              aria-controls="collapseMenu"
              aria-expanded={isMenuOpen}
              onClick={closeMenu}
              className="cursor-pointer rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span className="sr-only">Close main menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 fill-slate-900"
                aria-hidden="true"
                viewBox="0 0 329.269 329"
              >
                <path
                  d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.343-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c8.343-8.34 8.343-21.824 0-30.164z"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-8 p-6 text-sm font-semibold text-slate-900 lg:flex-row lg:p-0">

            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="rounded hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/catalogo"
                onClick={closeMenu}
                className="rounded hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Catálogo
              </Link>
            </li>

            <li>
              <Link
                to="/sobre"
                onClick={closeMenu}
                className="rounded hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Sobre nós
              </Link>
            </li>

          </ul>
        </div>

        <div className="flex items-center gap-4">

          <button
            type="button"
            aria-controls="collapseMenu"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            onClick={openMenu}
            className="cursor-pointer rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
          >
            <span className="sr-only">Abrir menu</span>

            <svg
              className="size-7 fill-slate-900"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
}