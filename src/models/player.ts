import {GameOption} from '@/enums/GameOption';

export class Player {
    public name: string = '';
    public choice: GameOption = GameOption.Unknown;
    public madeChoice: boolean = false;
}
