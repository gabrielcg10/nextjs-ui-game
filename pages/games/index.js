import BasicLayout from "../../layouts/BasicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Index({ data }) {

  return (
    <BasicLayout>
      <h1>Lista de productos</h1>
      {data.body.games.map(({ id, title, description, price }) => (
        <div className="card mb-2 ms-2" key={id}>
          <div className="card-body">
            <div className="h4 text-uppercase">
              <Link href={`/games/${id}`}>
                <a>
                  {title}
                </a>
              </Link>
            </div>
            <p className="fw-light">{description}</p>
            <p className="fw-light">{" $ "+price}</p>
          </div>
        </div>
      ))}
    </BasicLayout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://5keoyz05zc.execute-api.us-west-2.amazonaws.com/games"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
