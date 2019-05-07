from setuptools import setup, find_packages
from os import path

this_dir = path.abspath(path.dirname(__file__))
with open(path.join(this_dir, 'requirements.txt')) as fh:
    reqs = fh.read().splitlines()


setup(
    name='bmahlstedt',
    version='1.0.0',
    description='Personal Site',
    url='https://github.com/brianmahlstedt/bmahlstedt.com',
    author='Brian Mahlstedt',
    author_email='brian.mahlstedt@gmail.com',
    packages=find_packages(),
    install_requires=reqs,
    include_package_data=True,
)
