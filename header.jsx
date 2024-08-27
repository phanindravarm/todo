import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <div className="heading">
      <Typography
      className='Title'
      variant="h4"
      style={{
        fontFamily: 'Roboto, sans-serif', // Custom font family
        fontWeight: 'bold',               // Font weight
        fontSize: '1.5rem',                 // Font size                 // Font color,           // Letter spacing      // Text transformation                 // Line height
      }}
    >
      TO<span style={{color:"rgb(80, 200, 120 )"}}>DONE</span>
    </Typography>
    </div>
  );
}
