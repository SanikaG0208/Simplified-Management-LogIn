import { Button } from "antd";
export default function NotFoundPage() {
  return (
    <main id="main" tabIndex="-1" className="container section missing-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>
        Let's get you
        <br />
        back on track.
      </h1>
      <p>This address doesn't match a page on our website.</p>
      <Button type="primary" className="button" href="/">
        Back to home
      </Button>
    </main>
  );
}
