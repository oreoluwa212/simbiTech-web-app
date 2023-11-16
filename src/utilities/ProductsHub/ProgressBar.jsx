import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 5,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
   
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
   <>
   <p className="flex justify-between text-[#2B002B]"><span className="text-[10px]">Your Progress </span> <span className="font-bold">{`${completed}%`}</span></p>
   <div style={containerStyles}>
      <div style={fillerStyles}> 
       
      </div>
    </div>
   </>
    
  );
};

export default ProgressBar;