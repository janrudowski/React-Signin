function Welcome(props) {
  return (
    <main>
      <h1 className='header'>{`You've been successfully signed in, ${props.name}!`}</h1>
    </main>
  );
}

export default Welcome;
