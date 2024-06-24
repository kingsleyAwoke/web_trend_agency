from django.test import TestCase, Client
from django.urls import reverse, resolve
from app.views import index

# Test for Views.
class ViewsTestCase(TestCase):
    def setup(self):
        self.client = Client()



    def views_test(self):
        url = reverse('index')
        response = self.client.get(url)
        
        self.assertEqual(resolve(url).func.ViewsTestCase, index)
        self.assertTemplateUsed(response, 'index.html')
        pass



# Test for urls.
class URLsTestCase(TestCase):
    def urls_test(self):
        url = reverse('index')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        pass