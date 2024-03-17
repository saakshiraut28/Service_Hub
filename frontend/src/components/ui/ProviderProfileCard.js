/** @format */

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

function ProviderProfileCard({ img, name, category, description }) {
  return (
    <Card className="md:w-72 rounded-lg border border-[#9E9E9E] shadow-xl py-4 px-4 font-poppin my-2 mx-2">
      <CardBody className="text-center flex flex-col items-center justify-center ">
        <div className="w-[150px] h-[150px] my-2 mx-2 flex justify-center items-center bg-[#D9D9D9] rounded-full shadow-lg hover:border hover:border-[#012A45] overflow-hidden">
          <img
            src="https://unsplash.com/photos/woman-standing-on-middle-of-road-_dH-oQF9w-Y"
            alt="profile-picture"
            height="200px"
            width="200px"
          />
        </div>
        <Typography variant="h4" color="blacka" className="mb-2 font-bold">
          {name}
        </Typography>
        <Typography
          className="font-medium mb-2 bw-fit text-white font-medium text-sm bg-[#1170B0] px-4 rounded-full py-1"
          textGradient
        >
          {category}
        </Typography>
      </CardBody>
      <CardFooter className="flex text-center justify-center gap-7 pt-2">
        {description}
      </CardFooter>
    </Card>
  );
}

export default ProviderProfileCard;
