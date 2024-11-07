import BackButton from "./backButton"

interface Props
{
    title:string;
}

const HeaderBar = ({title,}:Props) => {

  return (
    <header className="d-flex justify-content-center">
      <BackButton></BackButton> <h1>{title}</h1>
    </header>
  )
}

export default HeaderBar