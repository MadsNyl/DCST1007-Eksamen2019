import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from 'react-simplified';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Card, Row, Column, Button, Form, NavBar } from './widgets';
import { createHashHistory } from 'history';
import { Item, shopService } from './services';


// for å kunne bytte url med kode, må dette med.
// Hvis man skal bytte url med html tag så bruk <NavLink to="url"/>
const history = createHashHistory();


class Home extends Component {

  items: Item[] = [];
  newItem = {
    name: "",
    count: 0,
    collected: false
  }

  render() {
    return(
      <Card title="Handleliste">
        <Row>
          <Column width={2}>
            Varenavn
          </Column>
          <Column width={2}>
            Antall
          </Column>
          <Column width={2}>
            Plukket opp
          </Column>
        </Row>
        {
          this.items.map((item, index) => {
            return <Row key={index}>
                      <Column width={2}>
                        { item.name }
                      </Column>
                      <Column width={2}>
                        { item.count }
                      </Column>
                      <Column width={2}>
                        <Button.Light
                          onClick={() => this.updateItem(item.name, item.collected)}
                        >
                          { item.collected ? "x" : "Venter" }
                        </Button.Light>
                      </Column>
                    </Row>
          })
        }
        <Card title="Ny vare:">
          <Row>
            <Column width={3}>
              <Form.Label>
                Navn
              </Form.Label>
              <Form.Input
                type='text'
                value={this.newItem.name}
                onChange={e => this.newItem.name = e.target.value}
              />
            </Column>
            <Column width={3}>
              <Form.Label>
                Antall
              </Form.Label>
              <Form.Input
                type='number'
                value={this.newItem.count}
                onChange={e => this.newItem.count = Number(e.target.value)}
              />
            </Column>
            <Column width={2}>
              <Button.Light
                onClick={this.addItem}
              >
                Legg til
              </Button.Light>
            </Column>
          </Row>
          <Row>
            <Column width={4}>
              <Button.Light
                onClick={this.resetList}
              >
                Nullstill handleliste
              </Button.Light>
            </Column>
          </Row>
        </Card>
      </Card>
    );
  }

  async resetList(): Promise<void> {
    await shopService.deleteList();
    this.items = await shopService.getItems();
  }

  async updateItem(name: string, collected: boolean): Promise<void> {
    await shopService.updateItem(name, !collected);

    this.items = await shopService.getItems();
  }

  async addItem(): Promise<void> {
    if (!this.newItem.name.length || this.newItem.count === 0) return;

    await shopService.addItem(this.newItem);
    this.items = await shopService.getItems();
  } 

  async mounted(): Promise<void> {
    this.items = await shopService.getItems();
  }
}

let root = document.getElementById('root');
if (root)
  createRoot(root).render(
    <div>
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
