import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 mr-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket}`} style={{ display: "contents" }}>
        <h4 className="mb-1">{ticket}</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">{ticket}</p>
      </Link>
    </div>
  );
};

export default TicketCard;
