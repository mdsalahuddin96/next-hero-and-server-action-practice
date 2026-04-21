import { Envelope, Globe, Plus, TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const HeroPage = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button className='bg-purple-500 text-white hover:bg-purple-600'>
        <Globe />
        Search
      </Button>
      <Button  variant="secondary">
        <Plus />
        Add Member
      </Button>
      <Button className='active:bg-green-600 text-white' variant="primary">
        <Envelope />
        Email
      </Button>
      <Button  variant="danger">
        <TrashBin />
        Delete
      </Button>
    </div>
  );
};

export default HeroPage;
