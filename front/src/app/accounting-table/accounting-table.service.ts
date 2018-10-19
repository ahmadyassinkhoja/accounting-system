import { Injectable } from '@angular/core'


@Injectable()
export class AccoutningTableService {

  editMode = false

  accounts = [
      {
        name:'Cash',
        debit: 10000,
        credit: 0
      },
      {
        name:'Account Recievable',
        debit: 2000,
        credit: 0
      },
      {
        name:'Prepaid building rent',
        debit: 0,
        credit: 12000
      }
    ]

    getAccounts(){
        return this.accounts
    }

    addRecord() {
      this.editMode = true
      let newAccount = {
        name:'New Enrty',
        debit: 0,
        credit: 0
      }
      this.accounts.push(newAccount)
    }

    deleteRecord(account) {
      let index = this.accounts.indexOf(account)
      this.accounts.splice(index, 1)
    }
}