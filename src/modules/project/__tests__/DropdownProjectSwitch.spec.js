import Setup from '../../../utils/test/UnitTester.js'
import DropdownProjectSwitch from '../DropdownProjectSwitch.vue'
import MdbProject from '@/models/MdbProject.js'
describe('components/modules/project/Setting.vue', () => {
    it('normal use', async () => {
        let tester = new Setup();
        await tester.setup();
        
        let project = new MdbProject();
        project.name = 'TEST PROJECT';
        project.description = 'TEST DESC';
        await project.save();
        await tester.activeProject(project);

        let wrapper = await tester.mount(DropdownProjectSwitch);
        await tester.msleep(1000);
    })
});