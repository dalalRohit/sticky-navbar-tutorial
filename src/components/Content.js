import React from 'react';
import './content.scss';

const Content=() => {

  const data=(
  	<div className="box">
  		<h2>My div content </h2>
  	</div>
  )

  return (
    <main className="content">
	    {data}
	    {data}
	    {data}
	    {data}
	    {data}
	    {data}
	    {data}
	    {data}
	    {data}
    </main>
  )
}

export default Content;
