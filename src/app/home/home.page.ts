import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private answers = ['FrankLotion', 'Epic Gamer Gabriel', 'DragonSlayer2008',
             'PulpFriction22', 'C. Falcant', 'BearableLime428',
             'SpaghettiHero6', 'DannyDeVitoFan65', 'Hamsora',
             'DavidHusslehoff', 'BigAnimeGuy435', 'ISmellLikePolkadot47',
             'AustinPowersup', 'IcantRead123',
             'Brawlerman3000', "TravelingMormon3", 'ThermanMerman95', 'SkiiMaskTheHumpGod1', 'Xxxtentacles563', 'CheeseStickLover99', "LlamaLover23"]
             // 'My reply is no.',
             //'My sources say no.', 'Outlook not so good.', 'Very doubtful.']

  constructor(private toastCtrl: ToastController) {}

  giveAnswer() {
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    this.presentToast(answer);
  }

  async presentToast(answer) {
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

}
