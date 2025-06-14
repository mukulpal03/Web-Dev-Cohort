import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createFileRoute("/Product")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to={"/product/1"}>Product 1</Link>
      <br />
      <Link to={"/product/2"}>Product 2</Link>
      <br />

      <Link to={"/product/3"}>Product 3</Link>
      <br />

      <Link to={"/product/4"}>Product 4</Link>
      <TanStackRouterDevtools />
    </div>
  );
}
