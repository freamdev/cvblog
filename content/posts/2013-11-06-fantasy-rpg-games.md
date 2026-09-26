---
layout: post
title: Fantasy RPG Games
date: 2013-11-06 12:00:00 +0100
summary: In this post I'll talk about one of my two long-standing projects.
categories:
keywords: fantasy, rpg
tags:
 - fantasy
 - rpg
---

## Dungeon Crawler

Earlier this year, not long after Tower Defense I started to experiment with the way OpenGl uses textures. I didn't really had a specific idea for a game, but I did have an rpg i wrote as my first semester homework a few years ago - wich is sadly lost to me after an unfortunate accident with my computer - that i wanted to remake in Java.

In this game the player have to find his way around a labyrinth to the designed exit - a ladder - while trying to gather artifacts wich grants you points.

### Download

- [Source](https://docs.google.com/file/d/0B0g3dLJ3brDzc1l0UDg0X3NFQkE/edit?usp=sharing)
- [Runnable](https://drive.google.com/file/d/0B0g3dLJ3brDzTmNEQ1hxZ1FOT1U/edit?usp=sharing)


![Dungeon Crawler](/assets/img/2013-11-06-fantasy-rpg-games/dungeon-crawler.png)

Soon after getting to this point in the game, I runed into major problems with the game design - mostly due to my inexperience with object oriented programing - wich made me scrap the project and start over with a fresh view, wich led us to...

## Game of Dragons

With Game of Dragons the dungeon crawling idea shifted a bit toward to randomly generated worlds, with generated dungeons in it for the player to explore. The main design focus was to make a game where I can jump in play a few minutes, and jump out without anything hindering my ability to play.

### Gameplay

In Game of Dragons you controll a warrior in a turn based enviroment, trying to find monsters that you are capeable of defeating, and finding equipments for your character. During the game, none of the enemy monsters able to chase you, making you able to choose when and who to fight at every point in the game. 

Killing monsters grants you experience points, wich in turn eventually level your hero. Fighting monsters also results in item drops - Wepon and armor - that you can equip making your character even more powerfull.

### Download

- [Source](https://drive.google.com/file/d/0B0g3dLJ3brDzZlZ1NVJETTd1LWc/edit?usp=sharing)
- [Runnable](https://drive.google.com/file/d/0B0g3dLJ3brDzTmNEQ1hxZ1FOT1U/edit?usp=sharing)

### Results

Not long after ballancing the bit over 150 items and monster in the game I realized that the engine is not prepared for switching into enemies chasing you down, wich made the game feel a lot easier then expected, considering if you couldnt defeat a foe you could just wait till your health regenerates and move on. This made me rethink the idea and try to approach it from a different angle. Regardless of that, I still found the game enjoyable from time to time and it was a great learning experience wich made me belive its worth to keep the project as another dead end.

![Game of Dragons](/assets/img/2013-11-06-fantasy-rpg-games/game-of-dragons.png)

### Conclusion

While many part of the last two game were made in an ad hoc way, there was a lot to learn from them for me. A while after running into troubles and suspending the development of both games I once again felt the need to polish up the idea of an action-rpg and try to finnaly finish a project im feeling statisfied of.

## Mistery Dungeon

The main idea of Mistery Dungeon is very similar to the fusion of the previous two games. While the game field grow far more simple, the enemies no longer just there for you to hunt down at your own leisure, they are actively trying to end your life, but your abilities to fight them also varies more then just trying to bullrush them to death.

### Gameplay

During gameplay you are fighting monsters in a square tower, facing more and more toughter mobs at every floor, up until 100 once you reach that you can start over with thoughter monsters.

At the end of every floor you are able to choose a new wepon to help you fight your way trough the next floor.

Once a monster is defeated it gives you experience wich eventually will level up your hero, wich gives you 3 stat points wich you can spend on strenght, dexterity, or constitute each increasing your damage, speed and maximum hitpoints respectively. Upon destroying a monster, it may drop a powerup wich can give you some kind of boost to aid you.

![Mistery Dungeon](/assets/img/2013-11-06-fantasy-rpg-games/mistery-dungeon.png)

### Current state 

Right now the  most of the game core mechanics are done and working without any obvious bugs, all that remains is to ballance the monsters, items, skills and also to work on the difficulty progression over different floors. After that all thar remains is a short testing period before its ready to be uploaded to the site.

### Legal Statement

I feel it neccesarry to point out for everyone that every art in Game of Dragons and Mistery Dungeon is done by David E. Gervais and his work is avaliable at [Pousse Rapiere](http://pousse.rapiere.free.fr/tome/tome-tiles.htm).
