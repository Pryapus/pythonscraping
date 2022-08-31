import os

from supabase import Client, create_client

url = "https://wyczvoptavvyepvohkdc.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5Y3p2b3B0YXZ2eWVwdm9oa2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEwMDAxODIsImV4cCI6MTk3NjU3NjE4Mn0.GJRsE85WOHWziN676EJZ2_fAV4Cj1J89U9BZK17kpSE"
supabase: Client = create_client(url, key)
# Create a random user login email and password.
random_email: str = "fabiangmeindl@gmail.com"
random_password: str = "fasefadeadaw1"
user = supabase.auth.sign_up(email=random_email, password=random_password)


def pushtodatabase(DatabaseName, NameFirstRow, DataFirstRow, NameSecondRow, DataSecondRow):
    data = supabase.table(DatabaseName).insert({NameFirstRow: DataFirstRow, NameSecondRow: DataSecondRow}).execute()
    assert len(data.data) > 0

def push3itemstodatabase(DatabaseName, NameFirstRow, DataFirstRow, NameSecondRow, DataSecondRow, NameThirdRow, DataThirdRow):
    data = supabase.table(DatabaseName).insert({NameFirstRow: DataFirstRow, NameSecondRow: DataSecondRow, NameThirdRow: DataThirdRow}).execute()
    assert len(data.data) > 0

# pushtodatabase("JSLinks", "brand_domain", "https://buah.de", "link_js", "https://u3nqc6abwf.kameleoon.eu/kameleoon.js")
