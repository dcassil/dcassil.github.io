export function ComponentLibDemoPage() {
  return (
    <div className="h-[calc(100vh-49px)] bg-background">
      <iframe
        title="Dashboard component library Storybook"
        src="/storybook/dashboard-component-lib/index.html"
        className="block h-full w-full border-0 bg-white"
      />
    </div>
  );
}
