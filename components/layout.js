export default function Layout({ children }) {
  return (
    <div className="max-w-screen-xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8 font-serif">
      <main>{children}</main>
    </div>
  );
}
