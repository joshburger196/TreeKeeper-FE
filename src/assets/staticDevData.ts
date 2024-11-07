import { Universe, Skill, SkillTree } from '../interfaces';

export const allSkills: Skill[] = [
    { id: "S0000000", name: "Overdraw", description: "Bows do 20% more damage (+20% per additional rank)" },
    { id: "S0000001", name: "Eagle Eye", description: "Pressing Block while aiming will zoom in your view" },
    { id: "S0000002", name: "Critical Shot", description: "10% chance of a critical hit that does extra damage" },
    { id: "S0000003", name: "Steady Hand", description: "Zooming in with a bow slows time by 25%" },
    { id: "S0000004", name: "Power Shot", description: "Arrows stagger all but the largest opponents 50% of the time" },
    { id: "S0000005", name: "Quick Shot", description: "Can draw a bow 30% faster" },
    { id: "S0000006", name: "Bullseye", description: "15% chance of paralyzing the target for a few seconds" },
];

export const testData: Universe[] = [
    {
        id: "U000",
        name: "Skyrim",
        skillTrees: [
            {
                id: "T000",
                name: "Archery",
                skillNodes: [
                    { skillId: "S0000000", comesAfter: null },        // Overdraw
                    { skillId: "S0000001", comesAfter: "S0000000" },  // Eagle Eye after Overdraw
                    { skillId: "S0000002", comesAfter: "S0000001" },  // Critical Shot after Eagle Eye
                    { skillId: "S0000003", comesAfter: "S0000002" },  // Steady Hand after Critical Shot
                    { skillId: "S0000004", comesAfter: "S0000002" },  // Power Shot after Critical Shot
                    { skillId: "S0000005", comesAfter: "S0000004" },  // Quick Shot after Power Shot
                    { skillId: "S0000006", comesAfter: "S0000005" },  // Bullseye after Quick Shot
                ]
            }
        ]
    },
    {
        id: "U001",
        name: "Oblivion",
        skillTrees: [
            {
                id: "T001",
                name: "Archery",
                skillNodes: [
                    { skillId: "S0000000", comesAfter: null },        // Overdraw
                    { skillId: "S0000001", comesAfter: "S0000000" },  // Eagle Eye after Overdraw
                    { skillId: "S0000002", comesAfter: "S0000001" },  // Critical Shot after Eagle Eye
                    { skillId: "S0000003", comesAfter: "S0000002" },  // Steady Hand after Critical Shot
                    { skillId: "S0000004", comesAfter: "S0000002" },  // Power Shot after Critical Shot
                    { skillId: "S0000005", comesAfter: "S0000004" },  // Quick Shot after Power Shot
                    { skillId: "S0000006", comesAfter: "S0000005" },  // Bullseye after Quick Shot
                ]
            }
        ]
    }
];

export const getSkillRequirements = (skillId:string, skillTreeId: string, universeId: string): Skill| null | undefined =>
{
    //given a specific skill that appears in a specific skilltree,
    //returns the required skill, indicated in the comesAfter field of the skillNode
    //returns null if skill has no requirements (comesAfter:null)
    //return undefined if the requiredSkill cannot be found by Id

    const universe=testData.find(universe => universe.id === universeId)
    if(!universe)return;

    const skillTree=universe.skillTrees.find(skillTree => skillTree.id === skillTreeId)
    if(!skillTree)return;

    const skillNode=skillTree.skillNodes.find(skillNode => skillNode.skillId === skillId)
    if(skillNode===undefined)return;
    if(skillNode.comesAfter===null)return null;

    const requiredSkill=getSkillById(skillNode.comesAfter);
    if(!requiredSkill)return;

    return requiredSkill;
}

export const getSkillById = (skid: string): Skill | undefined =>
    allSkills.find(skill => skill.id === skid);

export const getSkillTreeById = (stid: string): SkillTree | undefined => {  
    for (const universe of testData) {
        const searchResult = universe.skillTrees.find(skillTree => skillTree.id === stid);
        if (searchResult) return searchResult;
    }
    return undefined;
}

export const getSkillsBySkillTreeId=(stid:string):Skill[]|undefined =>
{
    const skillTree=getSkillTreeById(stid);
    if(!skillTree)return;

    let skillList:Skill[]=[];
    for(const skillNode of skillTree.skillNodes)
    {
        const skill=getSkillById(skillNode.skillId);
        if(!skill)return;
        skillList.push(skill);
    }
    return skillList
}

export const getUniverseById = (unid: string): Universe | undefined =>
    testData.find(universe => universe.id === unid);