import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ items }) => {
  return items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    )
  });
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistoryItem;
