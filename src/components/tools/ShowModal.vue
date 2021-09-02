<template>
  <!-- <div>
    <b-button @click="showMsgOk">Show OK message box with custom content</b-button>
  </div> -->
    <div>
        <button class="button" @click="showModals = true">modal</button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModals">

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ShowModal',
    methods: {
        showModals () {

        },
        showMsgOk () {
            const h = this.$createElement
            // Using HTML string
            const titleVNode = h('div', { class: ['foobar'] },
                [h('p', { class: ['text-center'] }, [
                    ' Register ',
                    h('strong', 'SUCCESS'),
                    ' <3 '
                ])])
            // More complex structure
            const messageVNode = h('div', { class: ['foobar'] }, [
                h('p', { class: ['text-center'] }, [
                    ' Login ',
                    h('strong', 'FOODZ SHOP'),
                    ' now! '
                ]),
                h('p', { class: ['text-center'] }, [h('b-spinner')]),
                h('b-img', {
                    props: {
                        src: 'https://picsum.photos/id/20/250/250',
                        thumbnail: true,
                        center: true,
                        fluid: true,
                        rounded: 'circle'
                    }
                })
            ])
            // We must pass the generated VNodes as arrays
            this.$bvModal.msgBoxOk([messageVNode], {
                title: [titleVNode],
                buttonSize: 'sm',
                centered: true,
                size: 'sm'
            })
        }
    }
}
</script>
