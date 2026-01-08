import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <div className={styles.mainArea}>
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}
