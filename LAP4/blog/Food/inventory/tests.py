from django.test import TestCase, Client
from django.urls import reverse
from .models import category, Item
# Create your tests here.


class BestTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.test_category = category.objects.create(
            code="CDT", name="condiment")
        cls.test_item_a = Item.objects.create(
            name="Ketchup", cat=cls.test_category)
        cls.test_item_b = Item.objects.create(
            name="Mustard", cat=cls.test_category)


class TestBasicViews(TestCase):
    client = Client()

    def test_about(self):
        resp = self.client.get(reverse('invetory-how-to'))
        assert "inventory/about.html" in [t.name for t in resp.template]

    def test_index(self):
        resp = self.client.get(reverse('inventory-index'))
        assert "items" in resp.context
        assert resp.context["items"].count() == 2

    def test_show(self):
        resp = self.client.get(
            reverse('show-item', args=[self.cls.test_item_b]))
        assert "item" in resp.context
        assert resp.context["name"] == self.cls.test_item_b.name
        assert resp.context["cat"] == self.cls.test_item_b.cat
