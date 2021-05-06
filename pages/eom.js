import { Head } from "next/head";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css";

const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee of the Month</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.month}`}
        />
        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee of the Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee of the Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Employee of the Month</h1>

          <div className={styles.eom}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt="employee of the month photo" />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiRes = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiRes.json();

  return {
    props: {
      employee: JSON.parse(JSON.stringify(employee)),
    },
  };
};

export default EOM;
