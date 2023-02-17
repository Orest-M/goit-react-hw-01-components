import PropTypes from 'prop-types';

import TransactionHistoryItem from 'components/transaction-history-item/transaction-history-item';

import css from './transaction-history.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionHistoryItem items={items} />
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
