const getDu = async () => {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
          resolve(Math.random());
        }, 3000);
      });
  }

const DummyUser = async() => {
    const du = await getDu()
  return (
    <div>DummyUser - {du}</div>
  )
}

export default DummyUser