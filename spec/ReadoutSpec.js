describe('Readout', function () {
  var Readout = require('../src/Readout');

  beforeEach(function() {
    readout = new Readout()
  });

  describe('#opening message', function () {
    it('opening message to player', function () {
      expect(readout.readoutArray).toEqual(['You wake up in a dark dungeon. Your eyes slowly adjust, and you see a dagger next to you. You think think its a good idea to pick this up.<br>', 'Suddenly, you hear what looks like a zombie running towards you...<br>'])
    });
  });
  describe('#clearReadout', function () {
    it('clears the readout', function () {
      readout.clearReadout()
      expect(readout.readoutArray).toEqual([])
    });
  });
  describe('#addReadout', function () {
    it('returns what it is passed', function () {
      readout.clearReadout()
      readout.addReadout('test message')
      readout.addReadout('test message')
      expect(readout.readoutArray).toEqual(['test message<br>', 'test message<br>'])
    });
  });
  describe('#printReadout', function () {
    it('prints to readout', function () {
      readout.clearReadout()
      readout.addReadout('test message')
      expect(readout.printReadout()).toEqual(['test message<br>'])
    });
  });
  describe('#monsterDamage', function () {
    it('prints to readout', function () {
      readout.clearReadout()
      readout.monsterDamage('zombie', 5)
      expect(readout.readoutArray).toEqual(['<span style="color: red;">zombie</span> attacks you for 5 damage<br>'])
    });
  });
  describe('#monsterMisses', function () {
    it('prints to readout', function () {
      readout.clearReadout()
      readout.monsterMisses('zombie')
      expect(readout.readoutArray).toEqual(['<span style="color: red;">zombie</span> attack misses<br>'])
    });
  });
  describe('#playerDamage', function () {
    it('prints type of damage to readout - normal', function () {
      readout.clearReadout()
      readout.playerDamage(5, 'normal')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">You</span> attack for 5 damage<br>'])
    });
    it('prints type of damage to readout - insane', function () {
      readout.clearReadout()
      readout.playerDamage(5, 'insane')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">You</span> strong attack for 5 damage<br>'])
    });
    it('prints type of damage to readout - quick', function () {
      readout.clearReadout()
      readout.playerDamage(5, 'quick')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">You</span> quick attack for 5 damage<br>'])
    });
  });
  describe('#playerPotion', function () {
    it('prints to readout', function () {
      readout.clearReadout()
      readout.playerPotion('health')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">You</span> drink a health potion and gain 25 health<br>'])
    });
  });
  describe('#playerMisses', function () {
    it('prints to readout - normal', function () {
      readout.clearReadout()
      readout.playerMisses('normal')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">Your</span> attack misses<br>'])
    });
    it('prints to readout - normal', function () {
      readout.clearReadout()
      readout.playerMisses('insane')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">Your</span> strong attack misses<br>'])
    });
    it('prints to readout - normal', function () {
      readout.clearReadout()
      readout.playerMisses('quick')
      expect(readout.readoutArray).toEqual(['<span style="color: green;">Your</span> quick attack misses<br>'])
    });
  });
  describe('#playerWins', function () {
    it('prints to readout', function () {
      readout.clearReadout()
      readout.playerWins()
      expect(readout.readoutArray).toEqual(['<span style="color: green;">You have won!</span><br>'])
    });
  });
  describe('#playerLoses', function () {
    it('prints to readout', function () {
      readout.clearReadout()
      readout.playerLoses()
      expect(readout.readoutArray).toEqual(['<span style="color: red;">You have died</span><br>'])
    });
  });
});
