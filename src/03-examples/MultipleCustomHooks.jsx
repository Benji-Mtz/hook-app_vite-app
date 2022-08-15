import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    
    const { increment, counter } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    // !null == true, !!null == false, !!true == true
    const { author, quote } = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />
        }

        <button 
            className="btn btn-warning"
            disabled={ isLoading }
            onClick={() => increment()}
        >
            Next quote
        </button>
    </>
  )
}
