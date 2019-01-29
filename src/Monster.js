
function Monster () {
  this.monsters = [
    { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 2, health: 35, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' },
    { name: 'Bat Swarm', difficulty: 'easy', specialAttack: 'Flying Scourge', specialAttackDamage: 3, health: 55, armor: 2, strength: 2, dexterity: 6, weaponMin: 2, weaponMax: 5, stunStatus: false, image: './static/images/batswarm.png' },
    { name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', specialAttackDamage: 5, health: 70, armor: 2, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/skeleton.png' },
    { name: 'Goblin', difficulty: 'medium', specialAttack: 'Fatal Deception', specialAttackDamage: 6, health: 80, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9, stunStatus: false, image: './static/images/goblin.png' },
    { name: 'Gorgon', difficulty: 'hard', specialAttack: 'Venomous Snakes', specialAttackDamage: 7, health: 90, armor: 6, strength: 5, dexterity: 6, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/gorgon.png' },
    { name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', specialAttackDamage: 9, health: 120, armor: 6, strength: 6, dexterity: 4, weaponMin: 9, weaponMax: 15, stunStatus: false, image: './static/images/shadowdemon.png' },
    { name: 'Dragon', difficulty: 'boss', specialAttack: 'Black Flames', specialAttackDamage: 12, health: 200, armor: 9, strength: 9, dexterity: 8, weaponMin: 15, weaponMax: 22, stunStatus: false, image: './static/images/dragon.png' },
    { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25, stunStatus: false, image: './static/images/trap.png' }
  ]
};

Monster.prototype.randomizeMonster = function (difficulty) {
  this.resetMonsters()
  var randMonster = []
  for (var i = 0; i < this.monsters.length; i++) {
    if (this.monsters[i]['difficulty'] === difficulty) {
      randMonster.push(this.monsters[i])
    }
  }
  return randMonster[Math.floor(Math.random() * randMonster.length)]
}

Monster.prototype.returnMonster = function (name) {
  for (var i = 0; i < this.monsters.length; i++) {
    if (this.monsters[i]['name'] === name) {
      return this.monsters[i]
    }
  }
}

Monster.prototype.resetMonsters = function () {
  this.monsters = [
    { name: 'Zombie', difficulty: 'easy', specialAttack: 'Deadly Kiss', specialAttackDamage: 2, health: 35, armor: 3, strength: 3, dexterity: 2, weaponMin: 5, weaponMax: 7, stunStatus: false, image: './static/images/zombie.png' },
    { name: 'Bat Swarm', difficulty: 'easy', specialAttack: 'Flying Scourge', specialAttackDamage: 3, health: 55, armor: 2, strength: 2, dexterity: 6, weaponMin: 2, weaponMax: 5, stunStatus: false, image: './static/images/batswarm.png' },
    { name: 'Skeleton', difficulty: 'medium', specialAttack: 'Necromancer', specialAttackDamage: 5, health: 70, armor: 2, strength: 4, dexterity: 2, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/skeleton.png' },
    { name: 'Goblin', difficulty: 'medium', specialAttack: 'Fatal Deception', specialAttackDamage: 6, health: 80, armor: 5, strength: 5, dexterity: 4, weaponMin: 7, weaponMax: 9, stunStatus: false, image: './static/images/goblin.png' },
    { name: 'Gorgon', difficulty: 'hard', specialAttack: 'Venomous Snakes', specialAttackDamage: 7, health: 90, armor: 6, strength: 5, dexterity: 6, weaponMin: 8, weaponMax: 12, stunStatus: false, image: './static/images/gorgon.png' },
    { name: 'Shadow Demon', difficulty: 'hard', specialAttack: 'Eternal Agony', specialAttackDamage: 9, health: 120, armor: 6, strength: 6, dexterity: 4, weaponMin: 9, weaponMax: 15, stunStatus: false, image: './static/images/shadowdemon.png' },
    { name: 'Dragon', difficulty: 'boss', specialAttack: 'Black Flames', specialAttackDamage: 12, health: 200, armor: 9, strength: 9, dexterity: 8, weaponMin: 15, weaponMax: 22, stunStatus: false, image: './static/images/dragon.png' },
    { name: 'Trap', difficulty: 'trap', health: 10, armor: 0, strength: 0, dexterity: 0, weaponMin: 25, weaponMax: 25, stunStatus: false, image: './static/images/trap.png' }
  ]
  return this.monsters
}

Monster.prototype.receiveDamage = function (monster, damage) {
  var returnMonster = this.returnMonster(monster)
  returnMonster['health'] -= damage
  return returnMonster['health']
}

Monster.prototype.returnAttribute = function (monster, type) {
  this.returnMonster(monster)
  return monster[type]
}

module.exports = Monster
