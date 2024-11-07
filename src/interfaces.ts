export interface Skill
{
  id:string;
  name:string;
  description:string;
}

export interface SkillTree
{
  id:string;
  name:string;
  skillNodes:{skillId:string, comesAfter:string|null}[];
}

export interface Universe
{
  id:string;
  name:string;
  skillTrees:SkillTree[];
}