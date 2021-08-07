import './ColorPicker.css';

const ColorPicker = ({ options }) => {
  return (
    <div>
      <h2>Color Picker</h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className="ColorPicker__option"
            style={{
              backgroundColor: color,
            }}
          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

// // Inline styles example. Background color is assigned dynamically
// const styles = {
//   option: {
//     display: 'inline-block',
//     width: 100,
//     height: 100,
//     marginRight: 10,
//     marginBottom: 20,
//     border: '2px solid wheat',
//   },
// };

// const ColorPicker = ({ options }) => {
//   return (
//     <div>
//       <h2>Color Picker</h2>
//       <div>
//         {options.map(({ label, color }) => (
//           <span
//             key={label}
//             style={{
//               ...styles.option,
//               backgroundColor: color,
//             }}
//           >
//             {color}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ColorPicker;
