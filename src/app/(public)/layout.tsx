export default function PrivateLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='mt-20 py-4 px-16 max-md/2:px-2'>{children}</div>;
}
