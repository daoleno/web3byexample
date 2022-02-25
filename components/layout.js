export default function Layout({ children }) {
  return (
    <div className="max-w-screen-md flex flex-col mx-auto px-4 sm:px-6 lg:px-8 mt-1">
      <main>{children}</main>
    </div>
  );
}
