import React from 'react';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon: IconType;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 min-h-[110px]">
      <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {name}
      </span>
    </div>
  );
};
