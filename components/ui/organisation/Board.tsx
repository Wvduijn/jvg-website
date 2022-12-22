import Heading from '../content/Heading';
import board_members from '../../../data/bestuur.json';
import BoardMember from './BoardMember';

const Board = (props: any) => {
  const { members } = board_members;

  return (
    <>
    <div className="flex flex-col text-center w-full mb-6 p-6 border bg-gray-50 border-slate-200 rounded-2xl">
      <Heading type="h4" weight="font-bold" color="orange">
        Bestuur JvG
      </Heading>
      <div className="flex flex-wrap -m-2">
        {members.map((member) => {
          return (
            <BoardMember
              key={member.name}
              name={member.name}
              image={member.image}
              position={member.position}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Board;
