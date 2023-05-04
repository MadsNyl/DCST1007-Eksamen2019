import { pool } from './mysql-pool';
import type { RowDataPacket } from 'mysql2';

export type Item = {
    name: string,
    count: number,
    collected: boolean
}

class ShopService {
    getItems(): Promise<Item[]> {
        return new Promise<Item[]>((resolve, reject) => {
            pool.query(
                "SELECT * from ShoppingList",
                (error, results: RowDataPacket[]) => {
                    error && reject(error);
                    resolve(results as Item[]);
                }
            );
        });
    }

    addItem(item: Item): Promise<RowDataPacket[]> {
        return new Promise<RowDataPacket[]>((resolve, reject) => {
            pool.query(
                "INSERT INTO ShoppingList (name, count, collected) VALUES (?,?,?)",
                [item.name, item.count, item.collected],
                (error, results: RowDataPacket[]) => {
                    error && reject(error);
                    resolve(results);
                }
            );
        });
    }

    deleteList(): Promise<RowDataPacket[]> {
        return new Promise<RowDataPacket[]>((resolve, reject) => {
            pool.query(
                "DELETE FROM ShoppingList",
                [name],
                (error, results: RowDataPacket[]) => {
                    error && reject(error);
                    resolve(results);
                }
            );
        });
    }

    updateItem(name: string, collected: boolean): Promise<RowDataPacket[]> {
        return new Promise<RowDataPacket[]>((resolve, reject) => {
            pool.query(
                "UPDATE ShoppingList SET collected = ? WHERE name = ?",
                [collected, name],
                (error, results: RowDataPacket[]) => {
                    error && reject(error);
                    resolve(results);
                }
            );
        });
    }
}

export const shopService = new ShopService();
