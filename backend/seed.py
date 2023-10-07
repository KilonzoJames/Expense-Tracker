#!/usr/bin/env python3
import random
import string
from Models.Transaction import Transaction 
from Models.Expense import Expense
from Models.Income import Income 
from app import app # Import the Flask app and SQLAlchemy db instance
from Models.Config import db

# Function to generate a random description
def generate_random_description():
    words = ['Groceries', 'Utilities', 'Rent', 'Salary', 'Dining', 'Shopping', 'Entertainment']
    random_word = random.choice(words)
    random_number = random.randint(1, 100)
    return f"{random_word} {random_number}"

# Define the list of strengths
def seed_data():
    try:
        with app.app_context():
            print("🦸‍♀️ Seeding transactions...")

            # Clear existing data
            db.drop_all()
            db.create_all()

            transactions = []

            # Seed 15 random expenses (negative amounts) with random descriptions
            for _ in range(15):
                amount = -random.randint(10, 1000)  # Negative random amount
                description = generate_random_description()
                transaction = Transaction(amount=amount, description=description)
                transactions.append(transaction)

            # Seed 15 positive amounts of incomes with random descriptions
            for _ in range(15):
                amount = random.randint(100, 1000)  # Positive random amount
                description = generate_random_description()
                transaction = Transaction(amount=amount, description=description)
                transactions.append(transaction)

            db.session.add_all(transactions)
            db.session.commit()

            print("🦸‍♀️ Seeding expenses...")

            expenses = []

            # Seed 15 random expenses (negative amounts) with random descriptions
            for _ in range(15):
                amount = -random.randint(10, 1000)  # Negative random amount
                description = generate_random_description()
                expense = Expense(amount=amount, description=description)
                expenses.append(expense)

            db.session.add_all(expenses)
            db.session.commit()

            print("🦸‍♀️ Seeding incomes...")

            incomes = []

            # Seed 15 positive amounts of incomes with random descriptions
            for _ in range(15):
                amount = random.randint(100, 1000)  # Positive random amount
                description = generate_random_description()
                income = Income(amount=amount, description=description)
                incomes.append(income)

            db.session.add_all(incomes)
            db.session.commit()

            print("🦸‍♀️ Done seeding!")
    except Exception as e:
        db.session.rollback()
        print(f"🦸‍♀️ Data seeding failed: {str(e)}")
    finally:
        db.session.close()

if __name__ == '__main__':
    with app.app_context():
        seed_data()
