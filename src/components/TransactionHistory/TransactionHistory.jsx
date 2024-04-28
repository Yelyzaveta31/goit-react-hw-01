import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={styles.type}>{item.type}</td>
              <td className={styles.type}>{item.amount}</td>
              <td className={styles.type}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
