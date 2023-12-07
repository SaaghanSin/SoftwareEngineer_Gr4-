import React from 'react';

const PaymentTable = () => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    borderRadius: '5%',
  };

  const div1Style = {
    color: '#e46138',
    marginBottom: '8px', 
  };

  const div2Style = {
    // Styles for the second <div>
    fontStyle: 'italic', // Add your styles here
  };

  const rowData = [
    ['Size', 'Giá một tờ ', 'Quy đổi sang số trang A5'],
    ['A3', '2000đ', '4'],
    ['A4', '1000đ', '2'],
    ['A5', '500đ', '1'],
  ];

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={{ ...cellStyle, backgroundColor: '#f2f2f2' }} colSpan="3">
            <div style={div1Style}>
              Lưu ý: 1 trang mua = 1 tờ A5
            </div>
            <div style={div2Style}>
              Ví dụ: để in 1 tờ A3 cần nhập vào ô số trang cần mua với số lượng là 4 vì A3 =2 A4 = 4 A5
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} style={cellStyle}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
